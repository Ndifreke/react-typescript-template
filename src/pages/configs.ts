import React from "react"
import dashboardConfig from './dashboard/config'
import loginConfig from './login/config'

export type PageConfigurationType = {
    path: string
    exact?: boolean
    component: React.FC<any>
}

type PageType = 'protected' | 'public'

type ConfigProps = { [pageType in PageType]: Array<PageConfigurationType> }

export const pageConfigurations: ConfigProps = {
    protected: [dashboardConfig],
    public: [loginConfig]
}
