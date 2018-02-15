import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'appName' })
export class NamePipe implements PipeTransform {

    transform(account: string, placeholder = '*') {
        if (!account) { return ''; }
        const atr = [];
        for (let i = 0; i < account.length; i++) {
            if (i > 1 && i < account.length - 2) {
                atr.push(placeholder);
            } else {
                atr.push(account[i]);
            }
        }
        return atr.join('');
    }

}
