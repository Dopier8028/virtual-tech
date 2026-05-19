/**
 * Simple Client-Side Database using IndexedDB
 * No server required!
 */

const DB_NAME = 'OganiDB';
const DB_VERSION = 1;
let db;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            initTables();
            resolve(db);
        };
        
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            
            if (!database.objectStoreNames.contains('users')) {
                const userStore = database.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
                userStore.createIndex('username', 'username', { unique: true });
            }
            
            if (!database.objectStoreNames.contains('products')) {
                database.createObjectStore('products', { keyPath: 'id' });
            }
            
            if (!database.objectStoreNames.contains('carts')) {
                const cartStore = database.createObjectStore('carts', { keyPath: 'id', autoIncrement: true });
                cartStore.createIndex('user_product', ['user_id', 'product_id'], { unique: true });
            }
            
            if (!database.objectStoreNames.contains('favorites')) {
                const favStore = database.createObjectStore('favorites', { keyPath: 'id', autoIncrement: true });
                favStore.createIndex('user_product', ['user_id', 'product_id'], { unique: true });
            }
        };
    });
}

function initTables() {
    // Add default products if not exist
    const tx = db.transaction('products', 'readwrite');
    const store = tx.objectStore('products');
    
    const products = [
        { id: '1', name: 'Crab Pool Security', price: 30.00, image: 'img/featured/feature-1.jpg', category: 'electronics' },
        { id: '2', name: 'Fresh Garden Vegetable', price: 39.00, image: 'img/featured/feature-2.jpg', category: 'vegetables' },
        { id: '3', name: 'Organic Bananas', price: 69.00, image: 'img/featured/feature-3.jpg', category: 'fastfood' },
        { id: '4', name: 'Premium Apples', price: 55.00, image: 'img/featured/feature-4.jpg', category: 'fruits' },
        { id: '5', name: 'Fresh Tomatoes', price: 45.00, image: 'img/featured/feature-5.jpg', category: 'vegetables' },
        { id: '6', name: 'Organic Carrots', price: 25.00, image: 'img/featured/feature-6.jpg', category: 'vegetables' },
        { id: '7', name: 'Fresh Lettuce', price: 15.00, image: 'img/cart/cart-1.jpg', category: 'vegetables' },
        { id: '8', name: 'Organic Oranges', price: 35.00, image: 'img/cart/cart-2.jpg', category: 'fruits' },
        { id: '9', name: 'Premium Grapes', price: 48.00, image: 'img/cart/cart-3.jpg', category: 'fruits' }
    ];
    
    products.forEach(product => {
        const req = store.get(product.id);
        req.onsuccess = () => {
            if (!req.result) {
                store.add(product);
            }
        };
    });
}

// API Functions
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 'hash_' + Math.abs(hash);
}

const ClientDB = {
    // User operations
    registerUser(username, password) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('users', 'readwrite');
            const store = tx.objectStore('users');
            const index = store.index('username');
            
            const checkReq = index.get(username.toLowerCase());
            checkReq.onsuccess = () => {
                if (checkReq.result) {
                    reject({ message: 'El usuario ya existe.' });
                } else {
                    const addReq = store.add({
                        username: username.toLowerCase(),
                        password_hash: hashPassword(password)
                    });
                    addReq.onsuccess = () => resolve({ success: true, user: username });
                    addReq.onerror = () => reject(addReq.error);
                }
            };
        });
    },
    
    loginUser(username, password) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('users', 'readonly');
            const store = tx.objectStore('users');
            const index = store.index('username');
            
            const req = index.get(username.toLowerCase());
            req.onsuccess = () => {
                const user = req.result;
                if (!user || hashPassword(password) !== user.password_hash) {
                    reject({ message: 'Usuario o contraseña incorrectos.' });
                } else {
                    resolve({ success: true, user: username, userId: user.id });
                }
            };
            req.onerror = () => reject(req.error);
        });
    },
    
    // Cart operations
    addToCart(userId, productId, quantity) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('carts', 'readwrite');
            const store = tx.objectStore('carts');
            const index = store.index('user_product');
            
            const checkReq = index.get([userId, productId]);
            checkReq.onsuccess = () => {
                if (checkReq.result) {
                    const updateReq = store.put({
                        ...checkReq.result,
                        quantity: (checkReq.result.quantity || 0) + quantity
                    });
                    updateReq.onsuccess = () => resolve({ success: true });
                    updateReq.onerror = () => reject(updateReq.error);
                } else {
                    const addReq = store.add({
                        user_id: userId,
                        product_id: productId,
                        quantity: quantity
                    });
                    addReq.onsuccess = () => resolve({ success: true });
                    addReq.onerror = () => reject(addReq.error);
                }
            };
        });
    },

    setCartQuantity(userId, productId, quantity) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('carts', 'readwrite');
            const store = tx.objectStore('carts');
            const index = store.index('user_product');

            const checkReq = index.get([userId, productId]);
            checkReq.onsuccess = () => {
                if (checkReq.result) {
                    if (quantity <= 0) {
                        const deleteReq = store.delete(checkReq.result.id);
                        deleteReq.onsuccess = () => resolve({ success: true });
                        deleteReq.onerror = () => reject(deleteReq.error);
                    } else {
                        const updateReq = store.put({
                            ...checkReq.result,
                            quantity: quantity
                        });
                        updateReq.onsuccess = () => resolve({ success: true });
                        updateReq.onerror = () => reject(updateReq.error);
                    }
                } else if (quantity > 0) {
                    const addReq = store.add({
                        user_id: userId,
                        product_id: productId,
                        quantity: quantity
                    });
                    addReq.onsuccess = () => resolve({ success: true });
                    addReq.onerror = () => reject(addReq.error);
                } else {
                    resolve({ success: true });
                }
            };
            checkReq.onerror = () => reject(checkReq.error);
        });
    },
    
    getCart(userId) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(['carts', 'products'], 'readonly');
            const cartStore = tx.objectStore('carts');
            const productStore = tx.objectStore('products');
            
            const range = IDBKeyRange.bound([userId, ''], [userId, '\uffff']);
            const req = cartStore.index('user_product').getAll(range);
            
            req.onsuccess = () => {
                const cartItems = req.result;
                const items = [];
                let completed = 0;
                
                if (cartItems.length === 0) {
                    resolve({ items: [] });
                    return;
                }
                
                cartItems.forEach(cartItem => {
                    const prodReq = productStore.get(cartItem.product_id);
                    prodReq.onsuccess = () => {
                        const product = prodReq.result;
                        if (product) {
                            items.push({
                                product_id: cartItem.product_id,
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                quantity: cartItem.quantity
                            });
                        }
                        completed++;
                        if (completed === cartItems.length) {
                            resolve({ items });
                        }
                    };
                });
            };
            req.onerror = () => reject(req.error);
        });
    },
    
    removeFromCart(userId, productId) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('carts', 'readwrite');
            const store = tx.objectStore('carts');
            const index = store.index('user_product');
            
            const req = index.get([userId, productId]);
            req.onsuccess = () => {
                if (req.result) {
                    const deleteReq = store.delete(req.result.id);
                    deleteReq.onsuccess = () => resolve({ success: true });
                    deleteReq.onerror = () => reject(deleteReq.error);
                } else {
                    resolve({ success: true });
                }
            };
        });
    },
    
    // Favorites operations
    addFavorite(userId, productId) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('favorites', 'readwrite');
            const store = tx.objectStore('favorites');
            const index = store.index('user_product');
            
            const checkReq = index.get([userId, productId]);
            checkReq.onsuccess = () => {
                if (!checkReq.result) {
                    const addReq = store.add({
                        user_id: userId,
                        product_id: productId
                    });
                    addReq.onsuccess = () => resolve({ success: true });
                    addReq.onerror = () => reject(addReq.error);
                } else {
                    resolve({ success: true });
                }
            };
        });
    },
    
    removeFavorite(userId, productId) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction('favorites', 'readwrite');
            const store = tx.objectStore('favorites');
            const index = store.index('user_product');
            
            const req = index.get([userId, productId]);
            req.onsuccess = () => {
                if (req.result) {
                    const deleteReq = store.delete(req.result.id);
                    deleteReq.onsuccess = () => resolve({ success: true });
                    deleteReq.onerror = () => reject(deleteReq.error);
                } else {
                    resolve({ success: true });
                }
            };
        });
    },
    
    getFavorites(userId) {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(['favorites', 'products'], 'readonly');
            const favStore = tx.objectStore('favorites');
            const productStore = tx.objectStore('products');
            
            const range = IDBKeyRange.bound([userId, ''], [userId, '\uffff']);
            const req = favStore.index('user_product').getAll(range);
            
            req.onsuccess = () => {
                const favorites = req.result;
                const items = [];
                let completed = 0;
                
                if (favorites.length === 0) {
                    resolve({ favorites: [] });
                    return;
                }
                
                favorites.forEach(fav => {
                    const prodReq = productStore.get(fav.product_id);
                    prodReq.onsuccess = () => {
                        const product = prodReq.result;
                        if (product) {
                            items.push({
                                product_id: fav.product_id,
                                name: product.name,
                                price: product.price,
                                image: product.image
                            });
                        }
                        completed++;
                        if (completed === favorites.length) {
                            resolve({ favorites: items });
                        }
                    };
                });
            };
            req.onerror = () => reject(req.error);
        });
    }
};
