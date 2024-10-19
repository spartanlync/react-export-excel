// Set a valid jsdom URL to avoid opaque origin issues
global.window = new jsdom.JSDOM('', { url: "http://localhost/" }).window;

beforeAll(() => {
    const mockLocalStorage = (() => {
        let store = {};
        return {
            getItem: (key) => store[key] || null,
            setItem: (key, value) => {
                store[key] = value.toString();
            },
            removeItem: (key) => {
                delete store[key];
            },
            clear: () => {
                store = {};
            },
        };
    })();

    Object.defineProperty(global, 'localStorage', {
        value: mockLocalStorage,
    });
});
