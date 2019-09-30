import { Injectable } from '@angular/core';

import { ClubModel } from '../../models/club.model';
import * as _ from 'lodash';

@Injectable()
export class ClubTableService {
  constructor() {}

  /**
   * Order Club Standing Table
   */
  clubStandingTableOrder(clubs: ClubModel) {
    return _.orderBy(clubs, ['points', 'gd'], ['desc', 'desc']);
  }
}
