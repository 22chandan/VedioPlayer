const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;





// |-- public/
// |   |-- index.html
// |-- src/
// |   |-- components/
// |   |   |-- Card.js
// |   |   |-- CardForm.js
// |   |   |-- CardModal.js
// |   |   |-- CardList.js
// |   |   |-- Bucket.js
// |   |   |-- BucketForm.js
// |   |   |-- BucketList.js
// |   |   |-- History.js
// |   |   |-- Navbar.js
// |   |   |-- NotFound.js
// |   |-- redux/
// |   |   |-- actions/
// |   |   |   |-- cardActions.js
// |   |   |   |-- bucketActions.js
// |   |   |-- reducers/
// |   |   |   |-- cardReducer.js
// |   |   |   |-- bucketReducer.js
// |   |   |-- store.js
// |   |-- App.js
// |   |-- index.js
// |-- package.json
// |-- README.md
