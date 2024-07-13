import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toast = inject(ToastrService);
  let taost = inject(ToastrService);
  return next(req).pipe(
    catchError((error:any)=>{
      if(error){
        console.log("error interceptor works");
        if(error.status === 401){
          router.navigate(['/home']);
        }
        if(error.error.message){
          toast.error(error.error.message , 'error');
        }
        if(error.error.errors){
          toast.error(error.error.errors , 'error');
        }
      }
      return throwError(error);
    })
  )
};
