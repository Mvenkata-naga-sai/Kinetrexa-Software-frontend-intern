import {trains} from '../data/trains';

export async function fetchTrains({from,to}){
 await new Promise(resolve=>setTimeout(resolve,250));
 const matches=trains.filter(train=>train.from.toLowerCase()===from.toLowerCase()&&train.to.toLowerCase()===to.toLowerCase());
 return matches.length?matches:trains.map(train=>({...train,from,to}));
}
