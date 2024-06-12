import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent  implements OnInit{
  id: number;
  mascota!: Mascota;
  loading: boolean = false;

  constructor(private _mascotaService: MascotaService,
    private aRoute: ActivatedRoute) {
      this.id = parseInt(this.aRoute.snapshot.paramMap.get('id')!);
      console.log(this.id); 
    }

    ngOnInit(): void {
      this.obtenerMascota();
    }
 
    obtenerMascota() {
      this.loading = true;
      this._mascotaService.getMascota(this.id).subscribe(data => {
        this.mascota = data;
        this.loading = false; 
      })
    }
}
