import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class LoadingService{
    private loading: Subject<boolean> = new Subject<boolean>();
    private loadCounts: number = 0;
    /**
     * Actives the loading screen
     */
    public setLoading(): void{
        this.loadCounts++;
        this.loading.next(true)
    }

    /**
     * Remove one load item from index
     */
    public unLoad(): void{
        this.loadCounts--;
        if(this.loadCounts <= 0){
            this.loading.next(false);
        }
    }
    /**
     * Check if is Loading
     */
    public isLoading(): Subject<boolean>{
        return this.loading;
    }
}