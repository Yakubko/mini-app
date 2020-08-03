import React, { Component, ReactElement } from 'react';

import navigation, { MenuItem } from '../menu-items';

type Props = {};
type State = {
    // main: any;
    item: MenuItem | null;
};

class Breadcrumb extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            // main: [],
            item: null,
        };
    }

    componentDidMount(): void {
        navigation.map((item: MenuItem) => {
            if (item.type && item.type === 'group') {
                this.getCollapse(item);
            }
            return false;
        });
    }

    getCollapse = (item: MenuItem): void => {
        if (item.children) {
            item.children.filter((collapse: MenuItem) => {
                if (collapse.type && collapse.type === 'collapse') {
                    this.getCollapse(collapse);
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === collapse.url) {
                        this.setState({ item: collapse }); // , main: item });
                    }
                }
                return false;
            });
        }
    };

    render(): ReactElement {
        // let main = null;
        // let item = null;
        let breadcrumb = null;
        let title = 'Welcome';
        // if (this.state.main && this.state.main.type === 'collapse') {
        //     main = (
        //         <li className="breadcrumb-item">
        //             <a href={DEMO.BLANK_LINK}>{this.state.main.title}</a>
        //         </li>
        //     );
        // }
        const { item } = this.state;

        if (item && item.type === 'item') {
            title = item.title;
            // item = (
            //     <li className="breadcrumb-item">
            //         <a href={DEMO.BLANK_LINK}>{title}</a>
            //     </li>
            // );

            if (item.breadcrumbs !== false) {
                breadcrumb = (
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h4 className="m-b-10">{title}</h4>
                                    </div>
                                    {/* <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">
                                                <i className="feather icon-home" />
                                            </Link>
                                        </li>
                                        {main}
                                        {item}
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        document.title = title;

        return <>{breadcrumb}</>;
    }
}

export default Breadcrumb;
