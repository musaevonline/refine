import {
    BaseRecord,
    DataProvider,
    GetListParams,
    GetListResponse,
    GitHubBanner,
    Refine,
} from "@refinedev/core";
import {
    notificationProvider,
    ThemedLayoutV2,
    ErrorComponent,
    RefineThemes,
} from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
    DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "../src/pages/posts";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";

const API_URL = "https://api.fake-rest.refine.dev";

const myDataProvider: Partial<DataProvider> = {
    getList: async (params: GetListParams): Promise<GetListResponse<any>> => {
        return { data: [], total: 0 };
    },
};

const myDataProvider2: Partial<DataProvider> = {
    getList: async (params: GetListParams): Promise<GetListResponse<any>> => {
        return {
            data: [{ name: "tom" }],
            total: 3,
        };
    },
};

const App: React.FC = () => {
    return (
        <DevtoolsProvider>
            <BrowserRouter>
                <GitHubBanner />
                <ConfigProvider theme={RefineThemes.Blue}>
                    <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider(API_URL)}
                        resources={[
                            {
                                name: "posts",
                                list: "/posts",
                                show: "/posts/show/:id",
                                create: "/posts/create",
                                edit: "/posts/edit/:id",
                                meta: {
                                    canDelete: true,
                                },
                            },
                        ]}
                        notificationProvider={notificationProvider}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                    >
                        <Routes>
                            <Route
                                element={
                                    <ThemedLayoutV2>
                                        <Outlet />
                                    </ThemedLayoutV2>
                                }
                            >
                                <Route index element={<NavigateToResource />} />

                                <Route path="/posts">
                                    <Route index element={<PostList />} />
                                    <Route
                                        path="create"
                                        element={<PostCreate />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<PostEdit />}
                                    />
                                    <Route
                                        path="show/:id"
                                        element={<PostShow />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                        <UnsavedChangesNotifier />
                        <DocumentTitleHandler />
                    </Refine>
                </ConfigProvider>
                <DevtoolsPanel />
            </BrowserRouter>
        </DevtoolsProvider>
    );
};

export default App;
