// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {TIconGlyph} from '@mattermost/compass-components/foundations/icon';

import {ClientPluginManifest} from 'mattermost-redux/types/plugins';
import {FileInfo} from 'mattermost-redux//types/files';
import {PostEmbed} from 'mattermost-redux/types/posts';
import {IDMappedObjects} from 'mattermost-redux/types/utilities';

export type PluginsState = {
    plugins: IDMappedObjects<ClientPluginManifest>;

    components: {
        Product: ProductComponent[];
        [componentName: string]: PluginComponent[];
    };

    postTypes: {
        [postType: string]: PostPluginComponent;
    };
    postCardTypes: {
        [postType: string]: PostPluginComponent;
    };

    adminConsoleReducers: {
        [pluginId: string]: any;
    };
    adminConsoleCustomComponents: {
        [pluginId: string]: AdminConsolePluginComponent;
    };
};

export type PluginComponent = {
    id: string;
    pluginId: string;
    component?: React.Component;
    subMenu?: any[]; // TODO Add more concrete type
    text?: string;
    dropdownText?: string;
    tooltipText?: string;
    icon?: React.ReactElement;
    mobileIcon?: React.ReactElement;
    filter?: (id: string) => boolean;
    action?: (...args: any) => void; // TODO Add more concrete types?
};

export type FileDropdownPluginComponent = {
    id: string;
    pluginId: string;
    text: string | React.ReactElement;
    match: (fileInfo: FileInfo) => boolean;
    action: (fileInfo: FileInfo) => void;
};

export type PostPluginComponent = {
    id: string;
    pluginId: string;
    type: string;
    component: React.Component;
};

export type AdminConsolePluginComponent = {
    pluginId: string;
    key: string;
    component: React.Component;
    options: {
        showTitle: boolean;
    };
};

export type PostWillRenderEmbedPluginComponent = {
    id: string;
    pluginId: string;
    component: React.ComponentType<{ embed: PostEmbed }>;
    match: (arg: PostEmbed) => boolean;
    toggleable: boolean;
}

export type ProductComponent = {
    id: string;
    pluginId: string;
    switcherIcon: TIconGlyph;
    switcherText: string;
    baseURL: string;
    switcherLinkURL: string;
    mainComponent: React.ReactNode;
    headerCentreComponent?: React.ReactNode;
    headerRightComponent?: React.ReactNode;
};
