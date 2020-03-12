import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({collections}) => 
(
            <div className = "shop-page">
               <CollectionsOverview />
            </div>
        )

        const mapStateToProps = createStructuredSelector({
            collections: selectCollections
          });
          
          export default connect(mapStateToProps)(ShopPage);