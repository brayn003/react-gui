import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/cjs/index.js',
                format: 'cjs',
                sourcemap: true,
                exports: 'named'
            },
            {
                file: 'dist/esm/index.mjs',
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser()
        ]
    },
    {
        input: 'dist/esm/types.d/index.d.ts',
        output: [{ file: 'dist/types/index.d.ts', format: "esm" }],
        external: [/\.css$/],
        plugins: [
            dts(),
            del({ targets: ['dist/esm/types.d', 'dist/cjs/types.d'], hook:'buildEnd' })
        ],
    },
]