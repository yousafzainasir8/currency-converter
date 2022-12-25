import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    http_count = 0; // initialize the counter.
    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.http_count++; // increment the count for each intercepted http request.
        req = req.clone({
            setHeaders: { "apikey": environment.apilayerKey }
        });
        return next.handle(req).pipe(
            finalize(() => {
                this.http_count--;
                if (this.http_count === 0) {
                    // hide spinner
                }
            })
        );
    }
}
