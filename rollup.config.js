import multi from '@rollup/plugin-multi-entry';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const terserOptions = {
    compress: true,
    mangle: true
}

const debug = {
    input: {
        include: ['src/*.js'],
        exclude: [
            'src/engineDebug.js',
            'src/mainDebug.js'
        ],
    },
    output: [
        {
            file: 'build/littlejs.js',
            format: 'iife',
            name: 'LittleJS'
        },
        {
            file: 'build/littlejs.min.js',
            format: 'iife',
            name: 'LittleJS',
            plugins: [terser(terserOptions)]
        },
        {
            file: 'build/littlejs.esm.js',
            format: 'esm',
        },
        {
            file: 'build/littlejs.esm.min.js',
            format: 'esm',
            plugins: [terser(terserOptions)]
        }
    ],
    plugins: [multi(), typescript()]
};

const release = {
    input: {
        include: ['src/*.js'],
        exclude: [
            'src/engineRelease.js',
            'src/mainRelease.js'
        ],
    },
    output: [
        {
            file: 'build/littlejs.release.js',
            format: 'iife',
            name: 'LittleJS'
        }
    ],
    plugins: [multi(), terser(terserOptions)]
}

export default [
    release,
    debug,
];