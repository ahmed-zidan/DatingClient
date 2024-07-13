import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const user = inject(UserService);

  let token = user.getCurrentUserFromLocal();
  if(token != undefined){
  let tokenReq = req.clone({
    setHeaders:{
      Authorization:'bearer '+token.token
    }
  })
  return next(tokenReq);
  }else{
    return next(req);
  }

};
