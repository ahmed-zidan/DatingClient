import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

export const authHandlerGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const toast = inject(ToastrService);
  const userService = inject(UserService);

  if(userService.getCurrentUserFromLocal()){
    return true;
  }else{
    toast.error('please sign in first','error');
    router.navigate(['/home'])
    return false;
  }
};
