import {Account} from './account.model';
import {AccountService} from './account.services';
import {AccountsList} from './accounts_list.component';
import {Component} from '@angular/core';

@Component({

  templateUrl: 'app/account/list.component.html',
  directives:[AccountsList],
})

export class ListComponent{

  private _accounts:Array<Account>;

  private _accountService:AccountService;
  constructor(accountService: AccountService,
              private _router:Router,
              private _router:ActivatedRoute){

    this._accountService = accountService;

    var promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }

  private _showAccountDeatils(account:Account){
    this._router.navigate(['/accounts', account.id]);
    this._router.navigate(['..', account.id], {relativeTo: this._route});
  }
}
