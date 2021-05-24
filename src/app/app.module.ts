
import { CoursesService } from './InjectionDependance/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { AlertModule} from '../ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassbindingComponent } from './Databinding/classbinding/classbinding.component';
import { EventbindingComponent } from './Databinding/eventbinding/eventbinding.component';
import { StylebindingComponent } from './Databinding/stylebinding/stylebinding.component';
import { TwowayComponent } from './Databinding/twoway/twoway.component';
import { InputpropertyComponent } from './InputOut/inputproperty/inputproperty.component';
import { OutputpropertyComponent } from './InputOut/outputproperty/outputproperty.component';
import { NgclassComponent } from './Directives/ngclass/ngclass.component';
import { NgforComponent } from './Directives/ngfor/ngfor.component';
import { NgifComponent } from './Directives/ngif/ngif.component';
import { NgstyleComponent } from './Directives/ngstyle/ngstyle.component';
import { NgswitchComponent } from './Directives/ngswitch/ngswitch.component';
import { ExemplepipeComponent } from './Pipes/exemplepipe/exemplepipe.component';
import { GetdatabyserviceComponent } from './InjectionDependance/getdatabyservice/getdatabyservice.component';
import { PersonComponent } from './person/person.component';
import { InputFormatDirective } from './Directives/input-format.directive';
import { MypipePipe } from './Pipes/mypipe.pipe';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListCvComponent } from './cvTech/list-cv/list-cv.component';
import { ItemCVComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { ObservableComponent } from './Observables/observable/observable.component';
import { Observable1Component } from './Observables/observable1/observable1.component';
import { PostsComponent } from './HttpClient/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostService } from './HttpClient/post.service';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component' ;
import { DirectivesComponent } from './Directives/directives/directives.component';
import { DatabindingComponent } from './Databinding/databinding/databinding.component';

const  routes : Routes = [
  {path: "httpClient", 
  component : PostsComponent
  },
  {path: "directives",
   component : DirectivesComponent
  },
  {path: "input",
   component : InputpropertyComponent
  },
  {path: "output",
  component : OutputpropertyComponent
 },
  {path: "observable",
  component : ObservableComponent
 },
 {path: "databinding",
 component : DatabindingComponent
},

]
@NgModule({
  declarations: [
    AppComponent,
    ClassbindingComponent,
    EventbindingComponent,
    StylebindingComponent,
    TwowayComponent,
    InputpropertyComponent,
    OutputpropertyComponent,
    NgclassComponent,
    NgforComponent,
    NgifComponent,
    NgstyleComponent,
    NgswitchComponent,
    ExemplepipeComponent,
    GetdatabyserviceComponent,
    PersonComponent,
    InputFormatDirective,
    MypipePipe,
    CvComponent,
    ListCvComponent,
    ItemCVComponent,
    DetailCvComponent,
    ObservableComponent,
    Observable1Component,
    PostsComponent,
    NavbarComponent,
    DirectivesComponent,
    InputpropertyComponent,
    OutputpropertyComponent,
    DatabindingComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
   HttpClientModule,
   AppRoutingModule

  ],
  providers: [CoursesService, PostService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
