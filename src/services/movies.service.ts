import {/* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class MoviesService {
  constructor(/* Add @inject to inject parameters */) {}
}
