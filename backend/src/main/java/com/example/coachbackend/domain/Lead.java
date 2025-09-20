package com.example.coachbackend.domain;

import jakarta.persistence.*;
import java.time.Instant;

@Entity @Table(name="leads")
public class Lead {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable=false) private String nombre;
  @Column(nullable=false) private String email;

  private String objetivoPrincipal;   // perder_peso | ganar_masa | rendimiento | recuperacion_lesion
  private Integer compromisoDias;     // 1..5
  private String capacidadEconomica;  // nunca | menos_50 | 50_100 | 100_mas
  private String urgencia;            // prisa | 3_6 | sin_prisa

  @Column(columnDefinition="text") private String lesiones;
  @Column(columnDefinition="text") private String disponibilidad;
  @Column(columnDefinition="text") private String material;
  @Column(columnDefinition="text") private String mensaje;

  private Instant createdAt = Instant.now();

  // === Getters / Setters (puedes generarlos con Alt+Insert en IntelliJ) ===
  public Long getId() { return id; }
  public String getNombre() { return nombre; }
  public void setNombre(String nombre) { this.nombre = nombre; }
  public String getEmail() { return email; }
  public void setEmail(String email) { this.email = email; }
  public String getObjetivoPrincipal() { return objetivoPrincipal; }
  public void setObjetivoPrincipal(String objetivoPrincipal) { this.objetivoPrincipal = objetivoPrincipal; }
  public Integer getCompromisoDias() { return compromisoDias; }
  public void setCompromisoDias(Integer compromisoDias) { this.compromisoDias = compromisoDias; }
  public String getCapacidadEconomica() { return capacidadEconomica; }
  public void setCapacidadEconomica(String capacidadEconomica) { this.capacidadEconomica = capacidadEconomica; }
  public String getUrgencia() { return urgencia; }
  public void setUrgencia(String urgencia) { this.urgencia = urgencia; }
  public String getLesiones() { return lesiones; }
  public void setLesiones(String lesiones) { this.lesiones = lesiones; }
  public String getDisponibilidad() { return disponibilidad; }
  public void setDisponibilidad(String disponibilidad) { this.disponibilidad = disponibilidad; }
  public String getMaterial() { return material; }
  public void setMaterial(String material) { this.material = material; }
  public String getMensaje() { return mensaje; }
  public void setMensaje(String mensaje) { this.mensaje = mensaje; }
  public Instant getCreatedAt() { return createdAt; }
  public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}
