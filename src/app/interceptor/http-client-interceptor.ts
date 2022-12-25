import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { CoverterService } from "../service/coverter.service";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    http_count = 0; // initialize the counter.
    constructor(public service: CoverterService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.http_count++; 
        this.service.showLoader = true;
        req = req.clone({
            setHeaders: { "apikey": environment.apilayerKey }
        });
        return next.handle(req).pipe(
            finalize(() => {
                debugger;
                this.http_count--;
                if (this.http_count === 0) {
                    this.service.showLoader = false;
                }
            })
        );
    }
}
