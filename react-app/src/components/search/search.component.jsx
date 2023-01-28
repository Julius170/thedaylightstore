
const Search = ({valueProp, setValueProp}) => {
  
  console.log(valueProp)
  return (
    <section id="newsletter" class="section-p1 newsletter-shop">
      <div class="form" id="shop-form">
        <input
          type="text"
          placeholder="Search"
          value={valueProp}
          onChange={(e) => setValueProp(() => e.target.value)}
        />
        <button class="normal reset-position">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </section>
  );
};

export default Search;
