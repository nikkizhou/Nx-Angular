import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { GreetingPipePipe } from './pipes/greeting-pipe.pipe';
import { AppSizerComponent } from './components/app-sizer/app-sizer.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    GreetingPipePipe,
    AppSizerComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
