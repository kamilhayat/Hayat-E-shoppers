  import styled from "styled-components";
  import FilterSection from "./components/FilterSection";
  import ProductList from "./components/ProductList";
  import Sort from "./components/Sort";

  const Products = () => {
    return (
      <Wrapper>

        
        <div className="container grid grid-filter-column">
          <div>
            <FilterSection />
          </div>
          

          <section className="product-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </section>
        </div>
      </Wrapper>
    );
  };

  const Wrapper = styled.section`
  padding-top: 10rem; 
  margin-left: 10rem;

  .grid-filter-column {
    display: grid; 
    grid-template-columns: 0.2fr 1fr; 
    gap: 1rem; 
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;


  export default Products;