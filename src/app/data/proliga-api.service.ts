import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { environment } from '@env';
import * as _ from 'lodash';

/**
 *  ProligaAPI Constrants
 *  Mappings to services on Proliga API
 */
export const PROLIGA_API = {
  LOCAL_ENDPOINT: 'http://localhost:3000/',
  TEST_ENDPOINT: 'http://172.16.199.90:3000/', // Jaeyoung's IP address
  PRODUCTION_ENDPOINT: '',
  VERSION: {
    ONE: 'v1/'
  },
  ENDPOINTS: {
    TABLES: {
      GET_ALL_RECORDS: 'tables'
    },
    CLUBS: {
      GET_ALL_CLUBS: 'clubs',
      GET_A_CLUB: 'clubs/{clubname}'
    },
    PLAYERS: {
      GET_ALL_PLAYERS: 'players'
    },
    FILTER: {
      GET_SEASONS: 'filter/seasons?league_id={league_id}',
      GET_CLUBS: 'filter/clubs?league_id={league_id}&&season_id={season_id}'
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class ProligaAPI {
  private API_ENVIRONMENT: 'local' | 'test' | 'production' = 'local';

  /**
   * Create API endpoint
   * @param URI
   * @param replacement
   */
  static prepareURI( URI: string, replacement: any = {} ) {
    _.each(replacement, (value: string, key: string) => {
      const find = new RegExp('{' + key + '}');
      URI = URI.replace( find, value );
    });

    return URI;
  }

  /**
   * Create API endpoint domain
   * @param base
   */
  currentAPI( base = '' ) {
    let api;
    if ( this.API_ENVIRONMENT === 'local' ) {
      api = PROLIGA_API.LOCAL_ENDPOINT;
    } else if ( this.API_ENVIRONMENT === 'test' ) {
      api = PROLIGA_API.TEST_ENDPOINT + base;
    } else {
      api = PROLIGA_API.PRODUCTION_ENDPOINT + base;
    }
    return api;
  }

}
