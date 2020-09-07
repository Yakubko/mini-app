module.exports = {
    extends: ['react-app', 'airbnb-typescript-prettier'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.test.ts', '**/*.test.tsx', 'src/setupTests.ts'],
            },
        ],
        'no-param-reassign': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'no-console': 0,
        '@typescript-eslint/no-explicit-any': 0,
    },
    env: {
        jest: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['./src'],
            },
        },
    },
};
