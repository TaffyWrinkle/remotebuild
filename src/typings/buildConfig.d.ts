/**
 *******************************************************
 *                                                     *
 *   Copyright (C) Microsoft. All rights reserved.     *
 *                                                     *
 *******************************************************
 */

declare module BuildConfig {
    export interface IBuildConfig {
        src: string;
        templates: string;
        build: string;
        buildCoverage: string;
        buildPackages: string;
        buildTools: string;
        buildTemplates: string;
        tsCompileOptions: any;
    }
}
