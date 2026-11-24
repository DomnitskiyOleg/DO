import { join } from 'path';

export const currentPath = process.cwd();
export const dataPath = join(currentPath, 'data');
export const publicPath = join(currentPath, 'public/static');
export const copiedPath = join(publicPath, 'data');
import { copySync, removeSync } from 'fs-extra';

const log = (message: string) => console.log(`[Pre-build]: ${message}`);

const copyFolder = () => {
    removeSync(copiedPath);
    log('Old data folder deleted');
    copySync(dataPath, copiedPath, { overwrite: true });
    log('Created a copy of the data folder');
};

copyFolder();
log('Content build completed');
