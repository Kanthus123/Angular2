import {Injectable, Optional} from '@angular/core';
import {Account} from "./account.model";
import {LoggerService} from '../util/logger.service';

@Injectable()
export class AccountService{

  constructor(@Optional() private _logger:LoggerService){}

  private _accounts:Array<Account> = [{
    id:1,
    title:"Global Bank",
    description: "Main Bank Account.",
    balance: 567
  },
  {
    id:2,
    title:"Pacific Bank",
    description: null,
    balance: 322
  }];

public getAll():Promise<Array<Account>>{
  return Promise.resolve(this._accounts);
}

private _nextId = 3 ;
private _accountLimit = 3;
public create(newAccount:Account){

  return new Promise((resolve, reject) => {
    if(this._accounts.length >= this._accountLimit)
      return reject("Maximum Accounts Limit Reached");

  newAccount.id = this._nextId++;
  if(this._logger)
    this._logger.log('Account created: ' + newAccount.title);
  this._accounts.push(newAccount);
  resolve(newAccount);
  });
}

  public remove(index:number){
  if(this._logger)
    this._logger.log('Account deleted: ' + this._accounts[index].title);

  this._accounts.splice(index, 1);
    }

    public getById(accountId:number):Promise<Account>{
      return new Promise((resolve, reject) =>{
        var foundAcc = this._accounts.find(acc => acc.id == accountId);

        if(!foundAcc){
          reject('No account with this id.');
                      }
        else{
          resolve(foundAcc);
            }
      });
    }
  }

export let ACCOUNT_SERVICE_PROVIDERS:Array<any> = [AccountService, LoggerService];
