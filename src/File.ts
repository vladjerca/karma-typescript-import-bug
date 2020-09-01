import addDays from 'date-fns/addDays';

export function callDateFnsMethod() {
    console.log(addDays(new Date(), 10));
}
