import React, { ReactElement, useState, useEffect } from 'react';

import navigation, { MenuItem } from './menu-items';

function Breadcrumb(): ReactElement {
    const [item, setItem] = useState<MenuItem | null>(null);
    useEffect(() => {
        navigation.map((navigationItem: MenuItem) => {
            if (navigationItem.type && navigationItem.type === 'group') {
                getCollapse(navigationItem);
            }
            return false;
        });
    });

    const getCollapse = (navigationItem: MenuItem): void => {
        if (navigationItem.children) {
            navigationItem.children.filter((collapse: MenuItem) => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse);
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === collapse.url) {
                        setItem(collapse);
                    }
                }
                return false;
            });
        }
    };

    let breadcrumb = null;
    let title = 'Welcome';

    if (item && item.type === 'item') {
        title = item.title;

        if (item.breadcrumbs !== false) {
            breadcrumb = (
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h4 className="m-b-10">{title}</h4>
                                </div>
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

export default Breadcrumb;
