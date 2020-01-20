import React from 'react';
import './collection.styles.scss';
// import moduleName from '../../comp'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>CATEGORY PAGE: {collection.title}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // currying
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
