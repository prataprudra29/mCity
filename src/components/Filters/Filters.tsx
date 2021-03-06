import React from 'react';
import { Collapse } from 'antd';

import Manufacturer from './Manufacturer';
import Prices from './Prices';
import Ram from './RAM';
import InternalStorage from './InternalStorage';

import './Filters.scss';

const { Panel } = Collapse;

function Filters() {
    return (
        <div className="catalog-filters">
            <Collapse defaultActiveKey={['1', '2', '3', '4']} expandIconPosition="right" ghost>
                <Panel header="Manufacturer" key="1">
                    <Manufacturer />
                </Panel>
                <Panel header="Prices" key="2">
                    <Prices />
                </Panel>
                <Panel header="RAM" key="3">
                    <Ram />
                </Panel>
                <Panel header="Flash memory" key="4">
                    <InternalStorage />
                </Panel>
            </Collapse>
        </div>
    );
}

export default Filters;
