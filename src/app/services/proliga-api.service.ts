import { of as observableOf, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

/**
 *  ProligaAPI Constrants
 *  Mappings to services on Proliga API
 */
export const PROLIGA_API = {
  LOCAL_ENDPOINT: 'http://localhost:5000/',
  PRODUCTION_ENDPOINT: '',
  ENDPOINTS: {
    CLUBS: {
      VERSION: {
        ONE: 'v1'
      },
      GET_ALL_CLUBS: 'clubs',
      GET_A_CLUB: 'clubs/{clubname}'
    }
  }
};

export class ProligaAPI {
  useLocalAPI = true;

  static prepareURI( URI: string, replacement: any = {} ) {
    _.each(replacement, (value: string, key: string) => {
      let find = new RegExp('{' + key + '}');
      URI = URI.replace( find, value );
    });

    return URI;
  }

  currentAPI( base = '' ) {
    return ( this.useLocalAPI === true ? PROLIGA_API.LOCAL_ENDPOINT : PROLIGA_API.PRODUCTION_ENDPOINT) + base;
  }

}
