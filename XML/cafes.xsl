<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <meta name="author" content="Miguel Guimarey Lesmes"/>
                <meta name="description"
                      content="Xsl asociado de al xml cafes"/>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet"/>
                <link rel="stylesheet" type="text/css" href="../Css/estiloXml.css"/>
                <link rel="stylesheet" type="text/css" href="../Css/EstiloModal.css"/>
                <link rel="stylesheet" type="text/css" href="../Css/Mapa.css"/>
            </head>
            <body>
                <h1>Productos de Cafe Destacados</h1>
                <section id="cafes">
                    <main>
                        <xsl:for-each select="cafes/cafe">

                            <article>
                                <a target="_blank">
                                    <figure>
                                        <img src="{@imagen}"/>

                                        <figcaption>
                                            <p>
                                                <xsl:value-of select="nombre"/>
                                            </p>
                                            <p>
                                                <xsl:value-of select="procedencia"/>
                                            </p>
                                            <p>
                                                <xsl:value-of select="@extraccion"/>
                                            </p>
                                            <button href="Modal.js" onclick="modales.desplegarModal(
                                                '{coordenadas/latitud}','{coordenadas/longitud}','{generate-id()}','modal-map{generate-id()}');">
                                                Detalles
                                            </button>
                                            <div id='{generate-id()}' class="modal">
                                                <span class="close" onclick="modales.ocultarModal('{generate-id()}');">
                                                    X
                                                </span>
                                                <div class="modal-content">

                                                    <img align="left" src="{@imagen}"/>
                                                    <p>
                                                        Variedad:
                                                        <xsl:value-of select="@variedad"/>
                                                    </p>
                                                    <p>
                                                        Procedencia:
                                                        <xsl:value-of select="procedencia"/>
                                                    </p>
                                                    <p>
                                                        Extraccion:
                                                        <xsl:value-of select="@extraccion"/>
                                                    </p>
                                                    <p>
                                                        Recoleccion:
                                                        <xsl:value-of select="@recoleccion"/>
                                                    </p>
                                                </div>
                                                <div class="modal-content" id="modal-map{generate-id()}">
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </a>
                            </article>

                        </xsl:for-each>

                    </main>
                </section>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCv4NCHuT2BpoTflmy_JwKuOjZAztWCe8"
                        type="text/javascript"></script>
                <script src="Modal.js"></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
