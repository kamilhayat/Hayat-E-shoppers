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
  /* Add padding-top to avoid content being hidden behind the navbar */
  padding-top: 10rem; /* This should match the header height */
  margin-left: 10rem;

  .grid-filter-column {
    display: grid; /* Ensure the display is set */
    grid-template-columns: 0.2fr 1fr; /* Define the grid columns */
    gap: 1rem; /* Space between grid items */
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr; /* Stack on smaller screens */
    }
  }
`;


  export default Products;