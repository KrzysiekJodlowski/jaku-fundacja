import { Injectable, Inject } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: "root"
})
export class WebstorageService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

  public loadDataToStorage(storageKey: string, data: any) {
    this.storage.set(storageKey, data);
  }

  public loadDataFromStorage(storageKey: string): any {
    return this.storage.get(storageKey);
  }
}
