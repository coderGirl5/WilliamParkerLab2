import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { ResearchComponent } from './components/research/research.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { AboutComponent } from './components/about/about.component';
import { Research2015Component } from './components/research2015/research2015.component';
import { Research2017Component } from './components/research2017/research2017.component';
import { Research2018Component } from './components/research2018/research2018.component';
import { Research2020Component } from './components/research2020/research2020.component';
import { Research2021Component } from './components/research2021/research2021.component';
import { ResearchHistoricalComponent } from './components/research-historical/research-historical.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'research', component: ResearchComponent,
     children: [
    { path: '', redirectTo: '2021', pathMatch: 'full' },
    { path: '2015', component: Research2015Component },
    { path: '2017', component: Research2017Component },
    { path: '2018', component: Research2018Component},
    { path: '2020', component: Research2020Component},
    { path: '2021', component: Research2021Component},
    { path: 'historical', component: ResearchHistoricalComponent}
  ]

},
  { path: 'inprogress', component: InprogressComponent},
  { path: 'about', component: AboutComponent },
  { path: 'intro', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
