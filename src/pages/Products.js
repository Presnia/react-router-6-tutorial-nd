import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
    return (
        <section className="section">
            <div className="products">
                {products.map((item) => (
                    <article key={item.id}>
                        <h5>{item.name}</h5>
                        <Link to={`/products/${item.id}`}>more info</Link>
                    </article>
                ))}
            </div>
        </section>
    );
};
export default Products;
