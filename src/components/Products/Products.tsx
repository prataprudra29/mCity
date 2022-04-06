import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { Select, Typography } from 'antd';

import ProductList from '../ProductList';
import LoadMore from '../LoadMore';
import { setOrderBy } from '../../store/filterBy/actions';
import { getProductsLength, getProductsTotal } from '../../selectors';

import './Products.scss';

const { Title } = Typography;

const options = [
    { label: 'New ones first', value: 'date-desc' },
    { label: 'Cheap at first', value: 'price-asc' },
    { label: 'Dear ones first', value: 'price-desc' },
];

function Products() {
    const dispatch = useDispatch();
    const orderBy = useSelector((state: any) => state.filterBy.orderBy, shallowEqual);
    const productsLength = useSelector(getProductsLength, shallowEqual);
    const total = useSelector(getProductsTotal, shallowEqual);

    const handleChangeSelect = (value: string) => {
        dispatch(setOrderBy(value));
    };

    return (
        <div className="products">
            <div className="products__heading">
                <Title level={4} style={{ margin: 0 }}>
                    Catalog
                </Title>
                <Select style={{ minWidth: 160 }} options={options} value={orderBy} onChange={handleChangeSelect} />
            </div>
            <ProductList />
            {productsLength < total && <LoadMore />}
        </div>
    );
}

export default Products;
