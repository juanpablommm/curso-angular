import { CanActivateFn } from '@angular/router';



/*ha muy grandes rasgos esto no es nada mas que una funcion que aplicara cierta logica de negocio
* para deolver un boleano en base a el cual que se dara o no autorizacion a un path, esto configurandolo
* en el RoutingModule,
* Por ejemplo se puede hcer una consulta a un servidor para que se valide la autenticacion de un usuario y
* en base a eso retornar un true o false para restringir la ruta */
export const authGuard: CanActivateFn = (route, state) => {


  /*estaremos comparado que el atributo que guardamo en el localStorage en el comonete principal, se igual a este valor
  * en base a eso devoleremos el false o true para simular que hicimos un request a un servicio y ahy validamos autenticacion del usuario
  * y en base a eso validamos con este guard*/
  return localStorage.getItem('idUser') === '1234';
};
