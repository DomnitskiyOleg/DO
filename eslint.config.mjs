import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
        // Custom build output dir (see `distDir` in next.config).
        'dist/**',
    ]),
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        files: ['**/*.{ts,tsx}'],
        extends: [tseslint.configs.recommended],
        rules: {
            semi: 'off',
            'import/extensions': 'off',
            '@typescript-eslint/no-throw-literal': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^\\u0000'], // side effect imports
                        ['^react$', '^@?\\w'], // пакеты
                        ['^@'], // абсолютные импорты / алиасы
                        ['^\\./'], // относительные
                        ['^.+\\.(module.css|module.scss)$'], // css/ scss модули
                        ['^.+\\.(png|jpg|svg|gif)$'], // медиа
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'no-unused-vars': 'off',
            'no-console': 'warn',
            'no-return-assign': 'off',
        },
    },
]);

export default eslintConfig;
