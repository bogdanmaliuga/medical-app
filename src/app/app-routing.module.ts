import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  { path: "", component: MainComponent, pathMatch: "full" },
  { path: "login", component: SignInComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
