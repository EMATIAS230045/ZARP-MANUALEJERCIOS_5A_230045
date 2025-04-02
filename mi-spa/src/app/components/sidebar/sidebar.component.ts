import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() currentContent: string = 'default';
  @Input() selectedOption: string = '';
  getSidebarContent() {
    switch (this.selectedOption) {
      case 'tabla 1':
        return { unidad: 'Unidad 2', objetivo: 'Realizar el tutorial de table databases', descripcion:'Esta tabla se expondra una tabla sencilla de databases '};
      case 'tabla 2':
        return { unidad: 'Unidad 2', objetivo: 'Realizar la tabla de tarea para la practica de sockets', descripcion:'Esta tabla es esterilizada con datos de reales de automovil'};
        case 'tabla 4':
          return { unidad: 'Unidad 2', objetivo: 'Realizar la tabla de tarea para la practica de sockets', descripcion:'Tabla para formato json'};
      case 'practica 1':
        return { unidad: 'Unidad 2', objetivo: 'anatomia de un componente', descripcion: 'En esta actividad, aprenderá a actualizar la plantilla y los estilos de un componente.' };
      case 'practica 2':
      return { unidad: 'Unidad 2', objetivo: 'Actualización de la clase de componente', descripcion: 'En esta actividad, aprenderá cómo actualizar la clase del componente y cómo usar la interpolación .' };
      case 'practica 3':
      return { unidad: 'Unidad 2', objetivo: 'Composición de componentes', descripcion: 'Ha aprendido a actualizar la plantilla del componente, la lógica del componente y los estilos del componente, pero ¿cómo usa un componente en su aplicación? La selectorpropiedad de configuración del componente proporciona un nombre para usar al hacer referencia al componente en otra plantilla. Se usa selectorcomo una etiqueta HTML, por ejemplo app-user, <app-user />en la plantilla. En esta actividad aprenderás a componer componentes.' };
      case 'practica 4':
      return { unidad: 'Unidad 2', objetivo: 'Flujo de control en componentes -@if', descripcion: 'Decidir qué mostrar en pantalla al usuario es una tarea común en el desarrollo de aplicaciones. Muchas veces, la decisión se toma programáticamente mediante condiciones. Para expresar visualizaciones condicionales en plantillas, Angular utiliza la @ifsintaxis de plantilla. En esta actividad, aprenderá a utilizar condicionales en plantillas.' };
      case 'practica 5':
      return { unidad: 'Unidad 2', objetivo: 'Flujo de control en componentes -@for', descripcion: 'A menudo, cuando se crean aplicaciones web, es necesario repetir algún código una cantidad específica de veces: por ejemplo, dada una matriz de nombres, es posible que desee mostrar cada nombre en una <p>etiqueta. En esta actividad, aprenderá cómo utilizar @forpara repetir elementos en una plantilla.' };
      case 'practica 6':
      return { unidad: 'Unidad 2', objetivo: 'Vinculación de propiedades en Angular', descripcion: 'La vinculación de propiedades en Angular le permite establecer valores para las propiedades de elementos HTML, componentes Angular y más. Utilice la vinculación de propiedades para establecer dinámicamente los valores de propiedades y atributos. Puede realizar acciones como activar o desactivar las funciones de los botones, establecer rutas de imágenes mediante programación y compartir valores entre componentes. En esta actividad, aprenderá cómo utilizar la vinculación de propiedades en las plantillas.' };
      case 'practica 7':
      return { unidad: 'Unidad 2', objetivo: 'Manejo de eventos', descripcion: 'El manejo de eventos habilita funciones interactivas en aplicaciones web. Como desarrollador, te permite responder a acciones del usuario, como pulsar botones, enviar formularios y más. En esta actividad, aprenderá cómo agregar un controlador de eventos.' };
      case 'practica 8':
      return { unidad: 'Unidad 2', objetivo: 'Component Communication with @Input', descripcion: 'A veces, el desarrollo de aplicaciones requiere el envío de datos a un componente. Estos datos pueden usarse para personalizar un componente o para enviar información de un componente principal a un componente secundario. Angular utiliza un concepto llamado Input. Es similar al propsde otros frameworks. Para crear una Inputpropiedad, se utiliza el @Inputdecorador.En esta actividad, aprenderá a utilizar el @Inputdecorador para enviar información a los componentes.' };
      case 'practica 9':
      return { unidad: 'Unidad 2', objetivo: 'Comunicación de componentes con@Output', descripcion: 'Al trabajar con componentes, puede ser necesario notificar a otros componentes sobre algún evento. Por ejemplo, si se ha hecho clic en un botón, se ha añadido o eliminado un elemento de una lista o se ha producido alguna actualización importante. En este caso, los componentes necesitan comunicarse con los componentes principales. Angular utiliza el @Outputdecorador para habilitar este tipo de comportamiento. En esta actividad, aprenderá a utilizar el @Outputdecorador y EventEmittera comunicarse con los componentes.' };
      case 'practica 10':
      return { unidad: 'Unidad 2', objetivo: 'Vistas aplazables', descripcion: 'A veces, en el desarrollo de aplicaciones, terminas con muchos componentes que necesitas referenciar en tu aplicación, pero algunos de ellos no necesitan cargarse de inmediato por varias razones. Quizás estén por debajo del pliegue visible o sean componentes pesados ​​con los que no se interactúa hasta más tarde. En ese caso, podemos cargar algunos de esos recursos posteriormente con vistas diferibles. En esta actividad, aprenderá cómo usar vistas diferibles para diferir la carga de una sección de su plantilla de componente.' };
      case 'practica 11':
      return { unidad: 'Unidad 2', objetivo: 'Optimización de imágenes', descripcion: 'Las imágenes son una parte importante de muchas aplicaciones y pueden contribuir en gran medida a los problemas de rendimiento de las aplicaciones, incluidos puntajes bajos de Core Web Vitals . La optimización de imágenes puede ser un tema complejo, pero Angular se encarga de la mayor parte mediante la NgOptimizedImagedirectiva. En esta actividad, aprenderás a usarla NgOptimizedImagepara garantizar que tus imágenes se carguen eficientemente.' };
      case 'practica 12':
      return { unidad: 'Unidad 2', objetivo: 'Vinculacion de componetes', descripcion: 'En la mayoría de las aplicaciones, llega un momento en que requieren más de una página. Cuando llega ese momento, el enrutamiento se convierte en un factor clave para el rendimiento de los usuarios. En esta actividad, aprenderá a configurar su aplicación para usar Angular Router.' };
      case 'grafica 1':
      return { unidad: 'Unidad 2', objetivo: 'Crear grafica sensilla', descripcion: 'Los gráficos interactivos son esenciales para visualizar datos en aplicaciones modernas. amCharts, una biblioteca de visualización de datos flexible y potente, se integra perfectamente con Angular para crear gráficos dinámicos y personalizables. En este tutorial, exploraremos cómo configurar amCharts 5 en un proyecto Angular y crear un gráfico básico, evitando los errores más comunes.' };
      case 'grafica 2':
      return { unidad: 'Unidad 2', objetivo: 'Gráfico de barras apiladas con valores negativos', descripcion: 'Grafia con valores contrarios de actividad de tarea de clase' };
      case 'grafica 3':
      return { unidad: 'Unidad 2', objetivo: 'Gráfico de barras de datos json', descripcion: 'Grafia con valores que utilizan datos de un documento tipo json' };
      case 'grafica 4':
      return { unidad: 'Unidad 2', objetivo: 'Gráfico de barras con datos de carros de un data set', descripcion: 'Grafia con valores contrarios de automoviles del data set asignado para las tablas' };
      case 'grafica 5':
      return { unidad: 'Unidad 2', objetivo: 'Gráfico de barras que responde a una api ', descripcion: 'Grafia con valores obtenidos desde mongo db' };
      default:
        return { unidad: '2', objetivo: 'Graficas Amschart', descripcion: 'session de las graficas' };
    }
  }
}
