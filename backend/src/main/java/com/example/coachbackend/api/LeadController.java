package com.example.coachbackend.api;

import com.example.coachbackend.domain.Lead;
import com.example.coachbackend.repo.LeadRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = {
  "http://localhost:3000", "http://localhost:3001",
  "https://tu-proyecto.vercel.app"
})
public class LeadController {
  private final LeadRepository repo;
  public LeadController(LeadRepository repo) { this.repo = repo; }

  @PostMapping
  public ResponseEntity<?> create(@Valid @RequestBody LeadDto dto) {
    Lead e = new Lead();
    e.setNombre(dto.nombre);
    e.setEmail(dto.email);
    e.setObjetivoPrincipal(dto.objetivoPrincipal);
    e.setCompromisoDias(dto.compromisoDias);
    e.setCapacidadEconomica(dto.capacidadEconomica);
    e.setUrgencia(dto.urgencia);
    e.setLesiones(dto.lesiones);
    e.setDisponibilidad(dto.disponibilidad);
    e.setMaterial(dto.material);
    e.setMensaje(dto.mensaje);

    Lead saved = repo.save(e);
    return ResponseEntity.created(URI.create("/api/leads/" + saved.getId()))
                         .body(saved);
  }

  @GetMapping
  public List<Lead> list() {
    return repo.findAll();
  }
}
