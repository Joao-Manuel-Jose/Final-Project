
import { NavAbout } from './navAbout'
import Link from 'next/link'
import Footer from '../Footer/page'



export function Carrosel(){
    return(
        <div>
            <div className="bg-[url('/aboutUs.jpg')] bg-cover bg-center h-[50rem]">
             <div> <NavAbout/> </div>
            
               <div className="bg-white h-24 py-2  w-80  xl:my-96 md:my-96 " >
                    <div className="m-1  text-orange-400 text-center text-2xl font-extrabold">Líder no mercado agrícola em Angola</div>
                </div>
            
                </div>
                {/* Article*/}
                <div className=' h-80 bg-gray-100 '>
                    <div className='text-center py-32 text-2xl text-orange-400 font-semibold'>Uma jornada de mil milhas <br />começa com um único passo <br /><cite className='text-center text-xs text-slate-500'>Confucius</cite> </div> 
                </div> 
                <div className='h-[50rem] border-t-2 border-b-2 border-orange-200 text-sm '>
                    <div className=' mx-32 text-justify py-28 space-y-2 text-gray-600'>
                        <p className=' '>Nos últimos anos, a AgroClick tem acompanhado o ritmo de desenvolvimento do mercado agrícola angolano, procurando dar respostas às necessidades cada vez mais exigentes dos seus clientes. Se por um lado, este desenvolvimento é possível através da diversificação do portfólio de produtos, por outro, a AgroClick tem apostado num plano de reestruturação e expansão com o objectivo de melhorar a forma como chega aos consumidores. </p>
                        <p>Conta atualmente com uma rede de entidades, vocacionadas para o segmento de consumo e uma unidade de negócio corporativa, totalmente dedicada ao segmento empresarial.</p>
                        <br />
                       <p><strong className='text-orange-600'>No retalho, </strong>a AgroClick disponibiliza uma vasta gama de produtos agrícolas de agricultores, produtores e indústrias nacional, conhecidos pelos seus preços competitivos e conta com uma rede de entidades espalhadas pelo país inteiro.
                       </p>
                       <p><strong className='text-orange-600'>A unidade de negócio corporativa </strong>da AngoClick visa oferecer às empresas e organizações um conjunto adicional de soluções para que o cliente se foque inteiramente no seu negócio, optimizando assim os seus recursos. As empresas e organizações dispõem de contactos directos e personalizados, operacionalizados por um gestor de conta dedicado.</p>
                       <p className='font-semibold text-orange-600'>Fazendas, Indústrias, Empresas transportadoras, Restaurantes e Supermercados, são os principais clientes no segmento de grandes empresas.</p>
                       <br />
                       <h1 className='mb-2 text-lg text-green-700'>O compromisso da área corporativa da AgroClick assenta em três áreas:</h1>
                       <p><strong className='text-orange-600'>Soluções à medida - </strong> Soluções desenhadas e implementadas em função das necessidades reais dos clientes, num processo que tem inicio com a auscultação do cliente, seguido da selecção da tecnologia e completado pelo desenho do serviços para a solução global.</p>
                       <p><strong className='text-orange-600'>Consultoria e Aconselhamento - </strong> Toda a experiência de vendas que são realizadas na plataforma, é recolhida de cada projecto e oferecida como um valor acrescentado a cada cliente, para que este possa  compreender por completo as limitações e vantagens de cada solução possível.</p>
                       <p className=''><strong className='text-orange-600'>Parcerias tecnológicas - </strong> estabelem relações de estreita confiança com os nossos clientes, resultando em parcerias de longa duração, o que nos permite apoiar a criação de uma infra-estrutura que cresce com o negócio do cliente, de acordo com uma estratégia de TI.</p>
                      
                    </div>
                    <h2 className='text-xl mx-32  text-green-700'>Inovamos a pensar em si!</h2>
                        
                    
                </div>
                {/* Notícias*/}
               
                    <div className="h-[40rem] ">
                        <div className='text-center font-medium py-10 border-b-2  border-orange-200'>Notícias Recentes</div>
                        <div className='grid grid-cols-3 gap-2 justify-items-center mx-10 py-8'>
                        <div className='border-r-2 border-orange-200 '> 
                        <Link href='https://med.gov.ao/ao/'>
                            <h2 className='mb-4 text-green-600 hover:underline'>AgroClick Participa Na Feira Promovida Pelo Ministério da Educação</h2>
                            <p className='text-sm mb-4 text-gray-600'>15 de Maio, 2024</p>
                            <p className='text-sm text-gray-600'> O Projecto Escolas de Referência (PER), é uma iniciativa do Executivo angolano e visa munir as escolas seleccionadas de todas as condições humanas, materiais e financeiras que garantam a melhoria da qualidade do processo de ensino e aprendizagem em Angola. O PER, foi concebido porque se pretende que as instituições de ensino observem elevados padrões de desempenho e alcancem os melhores resultados no domínio científico, técnico, tecnológico e cultural e na promoção da qualidade, da excelência, do mérito e da inovação. 
                            </p>
                        </Link></div>
                        <div className='border-r-2  border-orange-200 m-2 '>
                            <Link href="https://www.angotic.ao/ target_blank">
                                <h2 className='mb-4 text-green-600 hover:underline'>AgroClick Convidada A Participar Na Segunda Edição Do ANGOTIC </h2>
                                 <p className='text-sm mb-4 text-gray-600'>13-15 de Junho, 2024 | Centro de Conveções Talatona, Luanda</p>
                                 <p className='text-sm text-gray-600'>O ANGOTIC 2024, Fórum Internacional de Tecnologias de Informação e Comunicação de Angola, é um evento global de tecnologias de informação e comunicação, realizado e promovido pelo Governo de Angola, através do Ministério das Telecomunicações, Tecnologias de Informação e Comunicação Social, que além de outras, visa promover o debate em torno de temas, actuais, globais e futuros das TIC's, promover a partilha de conhecimentos, facilitar o networking para entidades governamentais, expositores, especialistas, apresentar as inovações bem como as tendências do sector.</p>
                            </Link>
                                
                    </div>
                    <div>
                        <Link href='https://fititel.itel.gov.ao/'>
                            <div className='mb-4 text-green-600 hover:underline'>AgroClick Marcará Presença Na 15ª Edição Da FITITEL</div>
                            <p className='mb-4 text-sm text-gray-600'>7-9 de Setembro, 2024| Bairro dos CCT-ITEL, Luanda</p>
                            <p className='text-sm text-gray-600'>A FITITEL, Feira de Inovação Tecnológica do ITEL, é um evento global de Tecnologia, realizado e promovido pelo Instituto de Telecomunicações-ITEL, que além de outras, visa a promover a cultura e debates em torno de temas actuais, ligados ao sector tecnológico. O principal objectivo da feira é expor projectos de destaques de alunos finalista dos cursos de: Informática, Eletrónica e Telecomunicações, bem como o curso de Informática e Multimídia, facilitar o networking para entidades e expositores, bem como apresentar soluções tecnólogica para os problemas da sociedade. </p>
                        </Link>
                                    </div>
                 </div>
        </div>
        <Footer/>
        </div>
    )
} 