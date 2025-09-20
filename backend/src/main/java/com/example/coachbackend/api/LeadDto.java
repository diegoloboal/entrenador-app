package com.example.coachbackend.api;

import jakarta.validation.constraints.*;

public class LeadDto {
  @NotBlank public String nombre;
  @Email @NotBlank public String email;

  public String objetivoPrincipal;   // perder_peso | ganar_masa | rendimiento | recuperacion_lesion
  public Integer compromisoDias;     // 1..5
  public String capacidadEconomica;  // nunca | menos_50 | 50_100 | 100_mas
  public String urgencia;            // prisa | 3_6 | sin_prisa

  public String lesiones;
  public String disponibilidad;
  public String material;
  public String mensaje;
}
