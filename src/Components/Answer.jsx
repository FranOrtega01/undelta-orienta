import React from 'react';

export const Answer = ({onNext, pts }) => {
    return (
        <div className='ansBody'>
        <div className='bg-light ansCard'>
            <div className='card'>
                {pts > 4 && pts < 9 ?
                    <p><><p>Sos un claro ejemplo de un nacido y criado en el Delta,  totalmente consciente de la gran importancia ecológica que tiene el área debido a su biodiversidad única y a la presencia de valiosos ecosistemas acuáticos y terrestres. Estás dispuesto a dar la vida para cuidar eso, que consideras un patrimonio de la humanidad.</p>
                        <p>Por suerte para vos llegó la UNDELTA, que va a acompañar toda ese ímpetu, compromiso y vocación, brindarte formación especializada y darte herramientas técnicas para que puedas terminar de comprender la ecología y dinámica de los ecosistemas del Paraná, Identificar los principales factores de riesgo que tiene la región, desarrollar estrategias de prevención y planificación ante incendios forestales y adquirir habilidades para el manejo del fuego y la supresión de incendios, porque sí, definitivamente tenes que inscribirte en la <span>Diplomatura en Manejo de Incendios Forestales y Restauración de Ecosistemas.</span>
                        </p></></p> :
                    pts > 8 && pts < 13 ? <><p>Claramente sos muy consciente de que las demandas contemporáneas del entorno están en constante evolución. Tenés una natural facilidad para comprender el proceso de acelerada transformación digital y la necesidad de innovar que estamos viviendo y se te ve completamente dispuesto a adaptarte y anticiparte a los cambios.
                    </p>
                        <p>
                            No tengas dudas: llegó el momento de venir a UNDELTA a adquirir conocimientos especializados en la convergencia de la innovación y la transformación digital aplicadas tanto a la gestión de negocios digitales como al capital humano y terminar de adquirir las herramientas y conocimientos necesarios para que seas un lider en procesos de innovación y transformación digital. Anotate en la <span>Diplomatura en Negocios Digitales e Innovación</span>
                            .</p></> :
                        pts > 12 && pts < 17 ? <p>Se nota que tenés una natural facilidad para hacer análisis, para preguntarte y cuestionarte el mundo que nos rodea. Está claro que derrochas sensibilidad y compromiso.  Tenés una vocación innata para transformarte en un facilitador de procesos de desarrollo. Todo eso lo vas a poder potenciar en UNDELTA, adquiriendo herramientas para la selección, diseño, aplicación y evaluación de diferentes intervenciones al desarrollo, para poder identificar los recursos disponibles en el territorio y aprender a valorarlos de acuerdo con las necesidades especiales de un diseño de un proyecto de intervención para el desarrollo. Te esperamos en Avellaneda 2270 para inscribirte en la <span>Diplomatura en Gestión del Desarrollo Territorial Sostenible</span>.</p> :
                            pts > 17 ? <p>Es evidente tu vocación para facilitar el aprendizaje a otras personas; tu esfuerzo por intentar que adquieran conocimientos, habilidades, valores, creencias y hábitos, y tenés facilidad para hacerlo. Además tenés una clara sensibilidad para identificar que cada vez se evidencian más las realidades sociales que presentan vulnerabilidades y conflictos, contexto en que niños y adolescentes poseen un rendimiento educativo más bajo de lo que podrían tener. Por suerte vas a poder venir a UNDELTA y formarte profesionalmente adquiriendo capacidades conceptuales y técnicas para poder desarrollar estrategias pedagógicas en contextos educativos de alta vulnerabilidad y poder diseñar líneas de acción que acompañen las necesidades de las instituciones del sistema educativo formal, de organizaciones de la sociedad civil y de otros espacios no formales estudiando la <span>Diplomatura en Educación en Contextos de Vulnerabilidad</span>.</p> :
                                <p>¡Ocurrió un error con tu test!</p>
                }
            </div>
            <button onClick={onNext}>Volver a hacer test</button>
        </div>
        </div>
    );
};
