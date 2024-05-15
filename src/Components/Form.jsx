import React, { useState } from 'react'
import './Form.css'
export const Form = ({onNext}) => {

    const [answers, setAnswers] = useState({
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    const options = {
        question1: {
            title: "1. ¿Cuál sería la forma ideal de despertarte a la mañana?",
            name: 'question1',
            options: [
                'Con un balde de agua fría en la cara.',
                'Con un robot que te prepara el desayuno y te da un masaje al mismo tiempo.',
                'Con una canción de Jack Johnson que te transporta a una playa tropical mientras te despiertas suavemente con el sonido de las olas.',
                'Con una alarma de rugido de un león, que la alternás -según el día- con una de un canto de 3 gallos en coro.',
                'No usás despertador. Apenas sale el sol ya estás firme despierto y dispuesto a encarar el día, porque no hay tiempo para dormir mientras el mundo está lleno de injusticias.'
            ]
        },
        question2: {
            title: "2. Salís de tu casa a la mañana y te das cuenta que te olvidaste el celular.",
            name: 'question2',
            options: [
                'No hay ninguna chance de que te olvides el celular. En los tiempos que corren, no tener una forma ágil de contactarse ante cualquier eventualidad es un riesgo que no se puede correr.',
                'El celu es como una extensión de tu cuerpo. No haces 3 pasos sin chequear que lo tengas encima. Es más probable que te olvides de ponerte las zapatillas, pero el celu jamás. Lo usás para chatear, hablar por teléfono, pagar los impuestos, metes unos diseños en canva para las redes y chequeas tus inversiones en la bolsa y en las cripto.',
                'Puede pasar. El estrés cotidiano al que estamos expuestos y las múltiples tareas que llevamos adelante en el cotidiano te pueden hacer estar disperso. Seguís adelante con normalidad, total cualquier persona que necesite contactarse con vos lo puede hacer por mail o por fax. Lo ves como una oportunidad de no dispersarte y conectar con el entorno.',
                'No usás celular. Estás completamente en contra de ese aparato que no hace otra cosa que enajenar a la gente, distraerla y hacer que se pierda la magia de encontrarse, conversar, disfrutar de una buena lectura.'
            ]
        },
        question3: {
            title: "3. Arranca el año, y como hacemos todos, te propones que esta vez sí, este es el año en el que vas a dejar de procrastinar y arrancar con un nuevo proyecto porque ya estás harto de hacer siempre lo mismo.",
            name: 'question3',
            options: [
                'Largás todo y te vas al sur, a Bariloche. Te anotás como voluntario de guardaparques en la Isla Victoria.',
                'Es el momento de jugártela y arrancar ese proyecto que se te ocurrió una noche tomando un vinito. Te asociás con ese amigo que sabés que te banca en todas y montan esa empresa de entrega de helado por drones que llega directamente a tu balcón.',
                'Te sumás como voluntario a la ONG “Señor Brócoli” un grupo de activistas que luchan contra el desperdicio de alimentos, disfrazados como brócolis gigantes y repartiendo recetas saludables en las calles.',
                'Te acercás al club de barrio en el que jugabas cuando eras pibe y te ofreces como voluntario para hacer un taller de apoyo escolar porque no podés soportar que los pibes y las pibas de bajos recursos tengan menos oportunidades de terminar la escuela y poder ingresar a la universidad, con lo que eso implica en término de herramientas para su futuro.'
            ]
        },
        question4: {
            title: "4. En tu infancia, ¿cuál era tu juego favorito?",
            name: 'question4',
            options: [
                'Jugabas todo el día a los bomberos. Tenias tu kit con el casco, las botas, y más de una vez te retaron porque te llevabas la manguera del jardín y generabas alto quilombo.',
                'Eras adicto al PC fútbol o el fútbol mánager. Te la pasabas horas y horas comprando jugadores. Te fijabas cuándo se le vencían los contratos para analizar el mejor momento para contratarlos. También planificabas estratégicamente la ampliación del estadio con un minucioso análisis financiero que te permita saber cuánto público llevabas y cómo eso impactaría en el presupuesto del club.',
                'Eras fan de la búsqueda del tesoro. Te la pasabas todo el día en la plaza jugando con pistas ingeniosas con las que hacías que tus amigos tengan que recorrer los árboles, levantar cuanta piedrita había en el piso y buscar en los lugares más recónditos de la plaza.',
                'Te la pasabas todo el día jugando al maestro, si no estaban tus amigos en casa, le dabas clase a cuanto muñequito había. Llegaste a preparar clases con filminas con el proyector que le robaste a tu madre docente para explicarle a tu colección de star wars/ barbies sobre el proceso de la fotosíntesis.'
            ]
        },
        question5: {
            title: "5. Arrancó el otoño, empieza a bajar la temperatura y lo único bueno es que se van los mosquitos, pero empieza a pintar el fresquito… ¿Cómo calefaccionarías tu casa?",
            name: 'question5',
            options: [
                'Tenés un aire acondicionado frío-calor que lo usas con restricción temporal de máximo 6hs por día porque querés evitar que se recaliente el motor y generar una catástrofe.',
                'Compraste por internet en una web china un sistema de calefacción que utiliza la energía generada por el movimiento que hacés en la hamaca paraguaya y lo transforma en calor, con lo cual mientras te relajás, podés calefaccionar toda la casa.',
                'Tienes una estufa alimentada por paneles solares que te permite calefaccionar la casa sin impactar negativamente en el ambiente, porque entendés que usar una estufa a gas o eléctrica, o incluso una salamandra a leña, sería impactar drásticamente en el ambiente y comprometer a las generaciones futuras.',
                'Arranca el frío y no podés ni pensar en cómo calefaccionar tu casa porque no tolerás que haya gente que no tuvo en la vida las mismas posibilidades que vos y que esté pasando frío. De hecho, tejes con tu familia frazadas y salís con una ONG a repartir por las noches a la gente en situación de calle.'
            ]
        }
    };


    return (
        <form>
            {Object.keys(options).map((key) => (
                <div key={key} className='cardCont card shadow'>
                    <label>{options[key].title}</label>
                    <div>
                        {options[key].options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name={options[key].name}
                                    value={index + 1}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <button 
            disabled={Number(answers.question1) +  Number(answers.question2) + Number(answers.question3) +Number(answers.question4) + Number(answers.question5)< 5}
            onClick={() => {
                onNext(Number(answers.question1) +  Number(answers.question2) + Number(answers.question3) +Number(answers.question4) + Number(answers.question5));
                console.log(Number(answers.question1) +  Number(answers.question2) + Number(answers.question3) +Number(answers.question4) + Number(answers.question5))
            }}>Mostrar Resultados</button>
        </form>
    )
}
